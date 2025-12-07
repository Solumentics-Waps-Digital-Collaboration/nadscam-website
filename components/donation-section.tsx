"use client"

import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, CreditCard, Smartphone, Building } from "lucide-react"
import { useState } from "react"
import { DonationForm } from "@/components/donation-form"

const impacts = [
  {
    amount: "5,000 CFA",
    label: "Educational Materials",
    description: "Provides flashcards and writing materials for one student.",
  },
  {
    amount: "25,000 CFA",
    label: "Monthly Therapy",
    description: "Sponsors speech or occupational therapy sessions for a child.",
  },
  {
    amount: "50,000 CFA",
    label: "Teacher Support",
    description: "Contributes to training specialized educators for our center.",
  },
]

export function DonationSection() {
  const [amount, setAmount] = useState("")

  return (
    <Section id="donate" className="bg-nadscam-blue/5">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <SectionTitle 
          title="Make a Difference Today" 
          subtitle="Your support changes lives. Every franc goes directly to empowering children with special needs." 
        />
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left Side: Impact Selector & Form */}
        <div className="lg:col-span-3 space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Your Impact</h3>
            <div className="grid sm:grid-cols-3 gap-4">
                {impacts.map((item, index) => (
                    <div 
                    key={index} 
                    className="bg-white p-4 rounded-xl border border-border shadow-sm hover:border-primary transition-colors cursor-pointer"
                    onClick={() => setAmount(item.amount)}
                    >
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-primary text-sm">{item.amount}</span>
                        <Heart className="w-4 h-4 text-nadscam-pink" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">{item.label}</h4>
                    </div>
                ))}
            </div>
          </div>
          
          {/* THE NOTIFICATION FORM */}
          <DonationForm />
        </div>

        {/* Right Side: Payment Methods */}
        <div className="lg:col-span-2">
          <Card className="h-full border-primary/20 shadow-lg sticky top-24">
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
              <CardDescription>Secure donation options.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="momo" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="momo">MOMO</TabsTrigger>
                  <TabsTrigger value="bank">Bank</TabsTrigger>
                  <TabsTrigger value="online">Card</TabsTrigger>
                </TabsList>

                {/* Mobile Money Tab */}
                <TabsContent value="momo" className="space-y-4">
                  <div className="bg-nadscam-light-yellow/50 p-4 rounded-lg border border-nadscam-yellow/20 flex gap-4 items-start">
                    <Smartphone className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Mobile Money</h4>
                      <p className="text-sm text-muted-foreground">Send to our official numbers.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="border p-3 rounded-lg bg-orange-50/50 border-orange-100">
                      <p className="text-xs font-bold text-orange-600 uppercase">Orange Money</p>
                      <p className="text-lg font-mono font-bold mt-1">#150*...#</p>
                      <p className="text-xs text-muted-foreground">Ref: NADSCAM</p>
                    </div>
                    <div className="border p-3 rounded-lg bg-yellow-50/50 border-yellow-100">
                      <p className="text-xs font-bold text-yellow-600 uppercase">MTN Mobile Money</p>
                      <p className="text-lg font-mono font-bold mt-1">+237 675 070 671</p>
                      <p className="text-xs text-muted-foreground">Name: NADSCAM Org</p>
                    </div>
                  </div>
                </TabsContent>

                {/* Bank Transfer Tab */}
                <TabsContent value="bank" className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex gap-4 items-start">
                    <Building className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Bank Deposit</h4>
                      <p className="text-sm text-muted-foreground">Afriland First Bank</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-2 text-sm bg-slate-50 p-4 rounded-lg border">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">Account Name:</span>
                      <span className="font-medium text-right">NADSCAM Association</span>
                    </div>
                    <div className="flex justify-between border-b py-2">
                      <span className="text-muted-foreground">Account No:</span>
                      <span className="font-mono text-right">0000 1234 5678</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-muted-foreground">Code / IBAN:</span>
                      <span className="font-mono text-right">AFRI CMCX</span>
                    </div>
                  </div>
                </TabsContent>

                {/* International / Online Tab */}
                <TabsContent value="online" className="space-y-4">
                   <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex gap-4 items-start">
                    <CreditCard className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">International</h4>
                      <p className="text-sm text-muted-foreground">Credit Card / PayPal</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-2">
                    <div className="grid gap-2">
                      <Label htmlFor="custom-amount">Amount (USD/EUR)</Label>
                      <Input 
                         id="custom-amount" 
                         placeholder="e.g., 50.00" 
                         value={amount.replace(" CFA", "")} 
                         onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                    <Button className="w-full bg-nadscam-green hover:bg-green-700 text-white">
                      Go to Payment Page
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}