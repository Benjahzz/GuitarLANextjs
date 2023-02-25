import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react'

const Pagina404 = () => {
  return (
    <Layout title='Pagina no Encontrada'>
        <p className='error'>Página no Encontrada</p>
        <Link href={'/'} className='error-enlace'>Ir a Inicio</Link>
    </Layout>
  )
}

export default Pagina404