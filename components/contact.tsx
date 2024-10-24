"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 contact-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Déjame un mensaje
        </h2>
        <div className="max-w-2xl mx-auto">
          <Card className="p-6">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre / Compañía
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre o el de tu compañía"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Correo electrónico para respuesta"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea id="message" placeholder="Tu mensaje" rows={6} />
              </div>
              <Button className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensaje
              </Button>
            </form>
          </Card>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Correo electrónico</h3>
                  <p className="text-muted-foreground">
                    sergiojauregui239@gmail.com
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Número de Contacto</h3>
                  <p className="text-muted-foreground">+57 3203795827</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
