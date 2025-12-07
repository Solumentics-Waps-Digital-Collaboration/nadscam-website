"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    paymentMethod: "",
    message: ""
  })

  // Simple handler to update state as you type
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault() // Stop page reload
    setIsSubmitting(true)

    // Basic check to make sure they at least put a name
    if (!formData.name || !formData.amount) {
      toast.error("Please fill in your Name and Amount.")
      setIsSubmitting(false)
      return
    }

    try {
      // Use Web3Forms or just simulate success for the demo
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // REPLACE THIS WITH YOUR REAL ACCESS KEY LATER
          access_key: "YOUR_ACCESS_KEY_HERE", 
          subject: `New Donation from ${formData.name}`,
          from_name: "NADSCAM Donation Site",
          ...formData,
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Thank you! We have received your donation details.")
        // Reset form
        setFormData({
            name: "",
            email: "",
            amount: "",
            paymentMethod: "",
            message: ""
        })
      } else {
        toast.error("Something went wrong. Please try again.")
      }
    } catch (error) {
      toast.error("Connection failed. Please check your internet.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
      <h3 className="text-xl font-semibold mb-2">Notify Us of Your Donation</h3>
      <p className="text-muted-foreground mb-6 text-sm">
        Did you make a transfer? Please fill this form so we can track it and thank you properly!
      </p>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Full Name
            </label>
            <Input 
              id="name" 
              name="name" 
              placeholder="John Doe" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="john@example.com" 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="amount" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Amount Sent (CFA)
            </label>
            <Input 
              id="amount" 
              name="amount" 
              placeholder="e.g. 10,000" 
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
             <label htmlFor="paymentMethod" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Payment Method
            </label>
            <Input 
              id="paymentMethod" 
              name="paymentMethod" 
              placeholder="e.g. Orange Money / Bank" 
              value={formData.paymentMethod}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
           <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Message (Optional)
           </label>
          <Textarea 
            id="message" 
            name="message" 
            placeholder="Any special instructions..." 
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Notify NADSCAM"
          )}
        </Button>
      </form>
    </div>
  )
}