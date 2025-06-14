export default function SectionTitle({ heading, subHeading }) {
    return (
        <div className='text-center my-12 md:w-[30%] mx-auto'>
            <p className='text-sm mb-4 text-yellow-400'>---{subHeading}---</p>
            <h2 className='text-3xl uppercase border-y-4 py-4'>{heading}</h2>
        </div>
    )
}