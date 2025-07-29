




export function Balance({value}){
    return <div className="flex">
        <div className="font-bold taxt-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}