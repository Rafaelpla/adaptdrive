"use client";

import React, { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <nav className="bg-[#002ce3] text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative w-10 h-10 content-center bg-white rounded-full">
              <img src="/img/logo.png" alt="logo" />
            </div>
            <span className="text-xl font-bold">AdaptDrive</span>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#quem-somos" className="hover:underline">
              Quem Somos
            </a>
            <a href="#projeto" className="hover:underline">
              O Projeto
            </a>
            <a href="#contato" className="hover:underline">
              Fale Conosco
            </a>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 flex flex-col space-y-4 md:hidden">
            <a href="#quem-somos" className="hover:underline">
              Quem Somos
            </a>
            <a href="#projeto" className="hover:underline">
              O Projeto
            </a>
            <a href="#contato" className="hover:underline">
              Fale Conosco
            </a>
          </div>
        )}
      </nav>

      <section className="relative bg-[#002ce3] text-white flex items-center justify-center h-[60vh]">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold mb-4">
            A Mobilidade Pertence a Todos
          </h1>
          <p className="text-xl mb-6">
            Tecnologia acessível não é o futuro. É o presente que estamos a
            construir.
          </p>
          <a
            href="#projeto"
            className="inline-block px-6 py-3 bg-[#e3002c] rounded-lg text-white font-semibold hover:bg-red-700 transition"
          >
            Saiba Mais
          </a>
        </div>
      </section>

      <section id="quem-somos" className="px-8 py-16">
        <h2 className="text-3xl font-semibold mb-4">Quem Somos Nós</h2>
        <p className="mb-2">
          Somos o AdaptDrive, um grupo formado por alunos de Engenharia de
          diversos períodos, unidos pelo propósito de desenvolver soluções
          acessíveis para a mobilidade de pessoas com deficiência (PCD). O
          projeto surgiu como uma oportunidade na seleção promovida pela Pato a
          Jato, onde nos deparamos com um desafio importante: criar uma solução
          para o controle manual de veículos adaptados. Guiados pelo princípio
          da acessibilidade, buscamos desenvolver tecnologias que promovam mais
          autonomia e qualidade de vida para quem depende de adaptações
          veiculares. Atualmente, o projeto está em desenvolvimento, e queremos
          que cada pessoa que visite nosso site se sinta curiosa e informada
          sobre as possibilidades e avanços nesse campo tão essencial.
        </p>
      </section>

      <section id="projeto" className="p-8 bg-white">
        <h2 className="text-3xl font-semibold mb-4">O Projeto</h2>
        <p className="mb-4">
          Desenvolvemos uma solução ideal para pessoas com deficiência nos
          membros inferiores que buscam mais liberdade na direção e autonomia na
          mobilidade. Nossa alavanca adaptada permite o controle completo do
          carro com as mãos, sem depender dos pedais, garantindo segurança,
          conforto e independência. Além disso, ela pode ser instalada e
          removida facilmente, sem alterar o funcionamento original do veículo.
          Isso significa mais praticidade e versatilidade, adaptando-se às
          necessidades de cada motorista.
        </p>
        <div className="flex w-full h-72 justify-center">
          <img
            src="/img/prototipo.png"
            alt="Imagem do produto"
            className="rounded"
          />
          <img
            src="/img/prototipoAcelerador.png"
            alt="Imagem do produto"
            className="rounded"
          />
        </div>
      </section>

      <section id="contato" className="p-8">
        <h2 className="text-3xl font-semibold mb-4">Fale Conosco</h2>
        <p className="mb-2">
          Mais informações? Entre em contato conosco via direct no Instagram!
        </p>
        <a
          href="https://www.instagram.com/adaptdrive/"
          target="_blank"
          className="inline-block mt-4 px-6 py-3 bg-[#002ce3] text-white rounded-lg hover:bg-[#001bb3] transition"
        >
          Visite nosso Instagram
        </a>
      </section>

      <footer className="bg-[#002ce3] text-white p-6 mt-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AdaptDrive — Mobilidade pertence a
          todos.
        </p>
      </footer>
    </main>
  );
}
