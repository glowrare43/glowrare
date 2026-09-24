import React from 'react'
import ContactBanner from './ContactBanner'
import Map from './Map'
import GetInTouch from './GetInTouch'
import GetTouch from './GetInTouch'
import SendMessage from './SendMessage'

const Contact = () => {
    return (
        <main>
            <ContactBanner />
            <section className="w-[90%]! max-w-312.5! mx-auto! my-11! grid! grid-cols-1! lg:grid-cols-[38%_62%]! gap-7! items-start!">
                <GetTouch />
                <SendMessage />
            </section>
            <Map />
        </main>
    )
}

export default Contact