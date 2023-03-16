import '@/components/styles/globals.css'
import type { AppProps } from 'next/app'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Navigation } from '../components/Navigation'

export default function App({ Component, pageProps }: AppProps) {
  const Ref = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()
  return <>
  <Navigation/>
  <SwitchTransition mode='out-in'>
      <CSSTransition nodeRef={Ref} key={pathname} classNames='page' timeout={500}>
        <main className='flex flex-1 flex-col overflow-auto overflow-bar' ref={Ref}>

  <Component {...pageProps} />
         
        </main>
       
      </CSSTransition>
    </SwitchTransition>
  </>


}
