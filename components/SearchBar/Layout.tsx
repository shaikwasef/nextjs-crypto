//libraries and dependencies
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
//interfaces
import { layoutInterface } from '../../interfaces/components/SearchBar/layout.interface'

export default function Layout({children , title = "Crypto tracker"} : layoutInterface) {
    return (
        <div className="layout">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="header">
                <Link href="/" passHref>
                    <a>
                        <img src ="/logo.png" alt = "tracker_logo" />
                    </a>
                </Link>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}
