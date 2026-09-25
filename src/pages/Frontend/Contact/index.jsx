import ContactBanner from './ContactBanner'
import Map from '../../../components/Map'
import GetTouch from './GetInTouch'
import SendMessage from './SendMessage'

const Contact = () => {
    return (
        <main>
            <ContactBanner />
            <section className="custom-container grid! grid-cols-1! lg:grid-cols-[38%_62%]! gap-7! items-start!">
                <GetTouch />
                <SendMessage />
            </section>
            <Map />
        </main>
    )
}

export default Contact