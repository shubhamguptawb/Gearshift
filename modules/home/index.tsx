import React from 'react'
import Image from 'next/image'
import { IMG_URL } from '@/lib/constants'
type Props = {
    companies: company[]
}
function Home({ companies }: Props) {
    return <main>
        <section className='banner'>

        </section>
        <section>
            {companies?.map((company: company) => <div className='' key={company.makeId}>
                <Image src={`${IMG_URL}${company.logoPath}`} alt={company.makeName} width={40} height={40} />
            </div>)}
        </section>
    </main>
}
export default Home