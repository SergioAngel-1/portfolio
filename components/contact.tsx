"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_l70cd48",
        "template_wwkbimw",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "118wEAfhrnLRmO4UC"
      );

      toast({
        title: "¡Mensaje enviado!",
        description: "Cuenta con una respuesta pronta.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Ha ocurrido un error, intente más tarde.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-20 contact-gradient">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Envíame un mensaje
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Nombre o Compañía"
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="Correo electrónico para respuesta"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Mensaje..."
                    rows={6}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </Card>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Correo</h3>
                    <p className="text-muted-foreground">
                      sergiojauregui2399@gmail.com
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <p className="text-muted-foreground">320 3795827</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
