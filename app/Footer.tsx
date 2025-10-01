import React from 'react'
import DynamicLink from './components/dynamic/DynamicLink'

export default function Footer() {
    return (
        //ponle un border-b al p de color : #7F13EC80 y porfavor de fondo por #7F13EC10
        <footer className="w-full bg-[#1a1a1a] text-white py-4">
            <div className="mx-auto flex flex-col justify-between items-center">
                <div className="flex space-x-4 mt-2 md:mt-0  w-full items-center justify-center border-b-1 border-[#7F13EC30] pb-4">
                    <DynamicLink href="/about" text="Acerca de" />
                    <DynamicLink href="/contact" text="Contacto" />
                    <DynamicLink href="/privacy" text="Política de Privacidad" />
                </div>
                <p className="text-center p-4 text-sm ">{new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}
