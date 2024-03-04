import ContactTable from "@/component/contact-table"
import Search from "@/component/search"
const Contact = () => {
    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex item-center justify-between gap-1 mb-5">
                <Search />
            </div>
            <ContactTable />

        </div>
    )
}

export default Contact
