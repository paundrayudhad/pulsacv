"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const convertRate = [
  {
    id: 1,
    provider: "Telkomsel",
    range: "50rb - dst",
    rate: "0.88",
    img: "/provider/telkomsel.png",
  },
  {
    id: 2,
    provider: "Axis & XL",
    range: "50rb - dst",
    rate: "0.90",
    img: "/provider/axis-xl.png",
  },
  {
    id: 3,
    provider: "Indosat",
    range: "50rb - 1jt",
    rate: "0.88",
    img: "/provider/indosat.png",
  },
  {
    id: 4,
    provider: "Tri",
    range: "50rb - 1jt",
    rate: "0.93",
    img: "/provider/tri.png",
  },
  {
    id: 5,
    provider: "Smartfren",
    range: "50rb - 1jt",
    rate: "0.87",
    img: "/provider/smartfren.png",
  },
]

type FormStep = "provider" | "bank" | "confirmation"

export default function FormulirPage() {
  const [step, setStep] = useState<FormStep>("provider")
  const [formData, setFormData] = useState({
    provider: "",
    phoneNumber: "",
    nominal: "",
    bank: "",
    accountNumber: "",
    accountName: "",
    rate: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const goToStep = (newStep: FormStep) => {
    setStep(newStep)
  }

  const goBack = () => {
    if (step === "bank") setStep("provider")
    if (step === "confirmation") setStep("bank")
  }

  const calculateAmountReceived = () => {
    if (!formData.nominal || !formData.rate) return 0
    const nominal = Number.parseFloat(formData.nominal)
    const rate = Number.parseFloat(formData.rate)
    return Math.floor(nominal * rate)
  }

  useEffect(() => {
    if (formData.provider) {
      const selectedProvider = convertRate.find((p) => p.provider === formData.provider)
      if (selectedProvider) {
        setFormData((prev) => ({ ...prev, rate: selectedProvider.rate }))
      }
    }
  }, [formData.provider])

  const renderProviderStep = () => (
    <>
      <CardHeader className="flex flex-row items-center p-4 pb-0">
        <Button variant="ghost" size="icon" className="mr-2 opacity-0">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <CardTitle className="flex-1 text-center text-xl">Formulir</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Provider</label>
            <Select value={formData.provider} onValueChange={(value) => handleChange("provider", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Pilih Provider"/>
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="" disabled className="text-gray-400">Pilih Provider</SelectItem>
                {convertRate.map((provider) => (
                  <SelectItem key={provider.id} value={provider.provider} className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="relative w-5 h-5 mr-2">
                        <Image
                          src={provider.img || "/placeholder.svg"}
                          alt={provider.provider}
                          width={20}
                          height={20}
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      {provider.provider}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Input
               type="number"
              placeholder="No Handphone"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
            />
          </div>

          <div>
            <Input
             type="number"
              placeholder="Nominal"
              value={formData.nominal}
              onChange={(e) => handleChange("nominal", e.target.value)}
            />
          </div>

          {formData.provider && (
            <div className="bg-amber-50 p-4 rounded-md">
              <div className="flex items-center">
                <span className="font-medium">Rate 🔥</span>
              </div>
              {convertRate.find((p) => p.provider === formData.provider)?.range && (
                <div className="text-sm">Range: {convertRate.find((p) => p.provider === formData.provider)?.range}</div>
              )}
              {formData.rate && <div className="text-sm">Rate: {Number.parseFloat(formData.rate) * 100}%</div>}
            </div>
          )}

          {formData.provider && formData.phoneNumber && formData.nominal && formData.rate && (
            <div className="bg-green-50 p-4 rounded-md">
              <div className="font-medium">Uang diterima</div>
              <div className="font-medium">Rp{calculateAmountReceived().toLocaleString()}</div>
            </div>
          )}

<Button
  className="w-full bg-teal-600 hover:bg-teal-700"
  onClick={() => goToStep("bank")}
  disabled={
    !formData.provider ||
    !formData.phoneNumber ||
    !formData.nominal ||
    Number(formData.nominal) < 50000
  }
>
  Selanjutnya
</Button>

        </div>
      </CardContent>
    </>
  )

  const renderBankStep = () => (
    <>
      <CardHeader className="flex flex-row items-center p-4 pb-0">
        <Button variant="ghost" size="icon" className="mr-2" onClick={goBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <CardTitle className="flex-1 text-center text-xl">Formulir</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-6">
        <div className="space-y-4">
          {/* Display Provider Step Information */}
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <h3 className="font-medium mb-2">Informasi Pulsa</h3>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <div>Provider</div>
              <div className="text-right font-medium">{formData.provider}</div>
              <div>Nomor</div>
              <div className="text-right">{formData.phoneNumber}</div>
              <div>Nominal</div>
              <div className="text-right">Rp {Number(formData.nominal).toLocaleString()}</div>
              {formData.rate && (
                <>
                  <div>Rate</div>
                  <div className="text-right">{Number.parseFloat(formData.rate) * 100}%</div>
                </>
              )}
            </div>
            <div className="mt-2 pt-2 border-t border-gray-200 flex justify-between items-center">
              <div className="text-sm">Uang diterima</div>
              <div className="font-medium text-green-600">Rp {calculateAmountReceived().toLocaleString()}</div>
            </div>
          </div>

          <div>
            <Select value={formData.bank} onValueChange={(value) => handleChange("bank", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Pilih Bank" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                <SelectItem value="" disabled className="text-gray-400">Pilih Bank</SelectItem>
                <SelectItem value="sakuku">SAKUKU</SelectItem>
                <SelectItem value="bca">BCA</SelectItem>
                <SelectItem value="linkaja">LINKAJA</SelectItem>
                <SelectItem value="dana">DANA</SelectItem>
                <SelectItem value="shopeepay">SHOPEEPAY</SelectItem>
                <SelectItem value="gopay">GOPAY</SelectItem>
                <SelectItem value="ovo">OVO</SelectItem>
                <SelectItem value="mandiri">MANDIRI</SelectItem>
                <SelectItem value="bni">BNI</SelectItem>
                <SelectItem value="bri">BRI</SelectItem>
                <SelectItem value="isaku">ISAKU</SelectItem>
                <SelectItem value="cimb">CIMB NIAGA</SelectItem>
                <SelectItem value="nagari">NAGARI</SelectItem>
                <SelectItem value="bank_lain">BANK LAIN</SelectItem>
                <SelectItem value="seabank">SEABANK</SelectItem>
                <SelectItem value="bsi">BSI</SelectItem>
                <SelectItem value="hana">KEB HANA / HANA BANK</SelectItem>
                <SelectItem value="permata">PERMATA</SelectItem>
                <SelectItem value="bank_jago">BANK JAGO</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Input
              type="number"
              placeholder="No Rekening / No HP"
              value={formData.accountNumber}
              onChange={(e) => handleChange("accountNumber", e.target.value)}
            />
          </div>

          <div>
            <Input
              placeholder="Nama Anda"
              value={formData.accountName}
              onChange={(e) => handleChange("accountName", e.target.value)}
            />
          </div>

          <Button
            className="w-full bg-teal-600 hover:bg-teal-700 text-white"
            onClick={() => goToStep("confirmation")}
            disabled={!formData.bank || !formData.accountNumber || !formData.accountName}
          >
            Selanjutnya
          </Button>
        </div>
      </CardContent>
    </>
  )

  const generateWhatsAppUrl = () => {
    const whatsappNumber = "6285751728931"
    const message = `Nominal Pulsa : ${formData.nominal}
Provider : ${formData.provider}
No Pengirim Pulsa : ${formData.phoneNumber}
Bank / Dompet Digital : ${formData.bank.toUpperCase()}
No Rekening : ${formData.accountNumber}
Atas Nama : ${formData.accountName}
Uang Diterima : Rp ${calculateAmountReceived().toLocaleString()}
Rate : ${formData.rate && `${Number.parseFloat(formData.rate) * 100}%`}`

    return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`
  }

  const handleWhatsAppRedirect = () => {
    const url = generateWhatsAppUrl()
    window.open(url, "_blank")
  }

  const renderConfirmationStep = () => (
    <>
      <CardHeader className="flex flex-row items-center p-4 pb-0">
        <Button variant="ghost" size="icon" className="mr-2" onClick={goBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <CardTitle className="flex-1 text-center text-xl">Konfirmasi</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-6">
        <div className="space-y-4">
          <div className="bg-amber-50 p-4 rounded-md border-l-4 border-amber-500">
            <p className="font-medium">Pastikan rekening anda benar</p>
            <p className="text-sm">Mohon di cek kembali nominal, nomor rekening, nama, dan data lainnya.</p>
          </div>

          <div>
            <h3 className="font-medium mb-2">Detail Transaksi</h3>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <div>Nomor</div>
              <div className="text-right">{formData.phoneNumber}</div>
              <div>Nominal</div>
              <div className="text-right">{formData.nominal}</div>
              <div>Rate</div>
              <div className="text-right">{formData.rate && `${Number.parseFloat(formData.rate) * 100}%`}</div>
              <div>Fee</div>
              <div className="text-right">Rp 2.500</div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="font-medium">Uang yang didapat</div>
            <div className="font-medium text-green-600">Rp {calculateAmountReceived().toLocaleString()}</div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Detail Bank/E-Wallet</h3>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <div>Bank / E-Wallet</div>
              <div className="text-right">{formData.bank.toUpperCase()}</div>
              <div>No Rek / No Hp</div>
              <div className="text-right">{formData.accountNumber}</div>
              <div>Atas Nama</div>
              <div className="text-right">{formData.accountName}</div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Syarat dan Ketentuan</h3>
            <p className="text-sm mb-2">
              Apakah anda bisa memastikan pulsa anda bukan dari hasil kejahatan seperti: pencurian, hacking, judi
              online, vcs, dll?
            </p>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm font-medium">
                Saya pastikan aman
              </label>
            </div>
          </div>
          <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={handleWhatsAppRedirect}>
            Convert Via Whatsapp
          </Button>
        </div>
      </CardContent>
    </>
  )

  return (
    <Card className="shadow-lg border rounded-xl overflow-hidden">
      {step === "provider" && renderProviderStep()}
      {step === "bank" && renderBankStep()}
      {step === "confirmation" && renderConfirmationStep()}
    </Card>
  )
}
