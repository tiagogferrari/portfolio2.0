export default function Home() {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* Coluna Esquerda - Texto */}
      <div className="w-3/5 p-8 pl-16 flex flex-col justify-center bg-white text-black dark:bg-black dark:text-white">
        <h1 className="text-4xl font-bold mb-6">Tiago Garcez Ferrari</h1>
        <p className="text-lg">
          Estudante de Análise e Desenvolvimento de Sistemas pela UTFPR, com experiência em estágio na área de TI. Em busca de uma oportunidade em uma empresa inovadora, visando o aperfeiçoamento profissional e o desenvolvimento de soluções criativas e eficientes. Motivado a enfrentar novos desafios e contribuir com ideias que agreguem valor à equipe e à organização.
        </p>
      </div>

      {/* Coluna Direita - Imagem */}
      <div className="w-2/5 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <img
          src="/images/white.png"
          alt="White background"
          className="w-full h-full object-cover dark:hidden"
        />
        <img
          src="/images/black.jpg"
          alt="Black background"
          className="w-full h-full object-cover hidden dark:block"
        />
      </div>
    </div>
  );
}
