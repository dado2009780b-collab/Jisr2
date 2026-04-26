import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function JoinForm() {
  const { language, t } = useLanguage();
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, {
      message: language === "ar" ? "الاسم يجب أن يحتوي على حرفين على الأقل" : "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: language === "ar" ? "البريد الإلكتروني غير صالح" : "Invalid email address.",
    }),
    phone: z.string().optional(),
    interest: z.string().min(1, {
      message: language === "ar" ? "الرجاء اختيار مجال الاهتمام" : "Please select your interest.",
    }),
    message: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock submission
    console.log(values);
    toast({
      title: language === "ar" ? "تم الإرسال بنجاح" : "Successfully Submitted",
      description: language === "ar" ? "شكراً لاهتمامك، سنتواصل معك قريباً." : "Thank you for your interest. We will contact you soon.",
    });
    form.reset();
  }

  const interests = [
    { value: "volunteer", ar: "متطوع", en: "Volunteer" },
    { value: "participant", ar: "مشارك", en: "Participant" },
    { value: "partner", ar: "شريك", en: "Partner" },
    { value: "donor", ar: "داعم", en: "Donor" },
  ];

  return (
    <section id="join" className="py-20 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Abstract bg patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 space-y-6 text-center lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl md:text-5xl font-bold">
              {t("كن جزءاً من التغيير", "Be Part of the Change")}
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed" dir={language === "ar" ? "rtl" : "ltr"}>
              {t(
                "سواء كنت شاباً يبحث عن تطوير مهاراته، أو خبيراً يود التطوع بوقته، أو مؤسسة ترغب في الشراكة معنا، نحن نرحب بك في مجتمعنا.",
                "Whether you are a youth looking to develop skills, an expert wanting to volunteer time, or an organization wanting to partner, we welcome you to our community."
              )}
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl text-[#0D1B2A]"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" dir={language === "ar" ? "rtl" : "ltr"}>
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("الاسم الكامل", "Full Name")} *</FormLabel>
                      <FormControl>
                        <Input placeholder={t("أحمد محمد", "John Doe")} {...field} className="bg-gray-50 border-gray-200" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("البريد الإلكتروني", "Email Address")} *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="example@email.com" {...field} className="bg-gray-50 border-gray-200 text-left rtl:text-right" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("رقم الهاتف", "Phone Number")}</FormLabel>
                        <FormControl>
                          <Input placeholder="+218 9X XXX XXXX" {...field} className="bg-gray-50 border-gray-200 text-left rtl:text-right" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("مجال الاهتمام", "Area of Interest")} *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} dir={language === "ar" ? "rtl" : "ltr"}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-50 border-gray-200">
                              <SelectValue placeholder={t("اختر...", "Select...")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {interests.map((int) => (
                              <SelectItem key={int.value} value={int.value}>
                                {t(int.ar, int.en)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("رسالة (اختياري)", "Message (Optional)")}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t("كيف تود أن تشارك معنا؟", "How would you like to participate?")} 
                          className="resize-none bg-gray-50 border-gray-200" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full text-base h-12" data-testid="btn-submit-join">
                  {t("أرسل الطلب", "Submit Request")}
                </Button>

              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
