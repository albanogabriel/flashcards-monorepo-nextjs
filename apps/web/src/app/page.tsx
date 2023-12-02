import { MoveRight } from 'lucide-react'
import { ProgressCircle } from '../components/progress-bar'

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-eletricviolet-700 to bg-eletricviolet-400 px-6 py-5 flex flex-col gap-8 shadow-lg">
        <img 
          src="https://github.com/albanogabriel.png"
          alt=""
          className="rounded-full h-16 w-16 self-end"
        />
        <span className="text-2xl font-bold leading-heading  text-alabaster-50">Dashboard</span>
      </div>

      <main className="p-6 flex flex-col gap-4">
        <span className='text-xl font-bold leading-heading'>Coleções</span>

        <div className="flex flex-col gap-3 bg-[#fff] py-4 px-5 rounded-lg border border-alabaster-100 shadow-lg">
          <span className='font-bold text-sm text-eletricviolet-400 leading-heading'>JavaScript</span>
          
          <div className='space-y-2'>
            <div className="flex items-center gap-12">
            <h2 className='font-bold leading-heading'>Fundamentos do JavaScript</h2>
            <div className='flex items-center gap-2'>
              <div className='h-6 w-6'>
                <ProgressCircle progress={50} />
              </div>
              <span className=' text-alabaster-400 text-sm leading-base'>8/16</span>
            </div>
            </div>
            <p className=' text-alabaster-800 text-sm leading-base'>Treine seus conhecimentos nos fundamentos do JavaScript como Arrays, variáveis, condicionais e estruturas de repetição.</p>
          </div>

          <div className='md:flex items-center justify-between'>
            <a
              href='#'
              className='px-5 py-3 flex items-center justify-center gap-[0.625rem] font-bold text-sm bg-eletricviolet-400 text-eletricviolet-50 rounded-md'
            >
              Acessar coleção 
              <MoveRight className='w-5 h-5'/>
            </a>
          </div>
        </div>
      </main>


    </div>
  )
}
