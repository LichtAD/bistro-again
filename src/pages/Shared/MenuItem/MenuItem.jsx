function MenuItem({ item }) {

    const { name, recipe, image, price } = item;

    return (
        <div className="flex justify-evenly">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[120px] mr-4" src={image} alt="" />
            <div>
                <div className="flex justify-between">
                    <h3 className="font-bold uppercase">{name}--------------</h3>
                    <h3 className="text-orange-500">${price}</h3>
                </div>
                <p className="mt-2 text-gray-600">{recipe}</p>
            </div>
        </div>
    )
}

export default MenuItem