"use server"

import { createClient } from "@/lib/supabase/server"

export async function submitContactForm(formData: {
  name: string
  email: string
  phone: string
  message: string
}) {
  try {
    const supabase = await createClient()

    const { error } = await supabase.from("contact_submissions").insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    })

    if (error) {
      console.error("[v0] Supabase insert error:", error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Contact form submission error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An error occurred",
    }
  }
}
