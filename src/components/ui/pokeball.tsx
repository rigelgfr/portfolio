import pokeball_animated from "@/assets/icon/pokeball_animated.png";

export function Pokeball( { className }: { className?: string } ) {
    return (
        <div className="flex w-full justify-center">
            <img src={pokeball_animated} alt="Pokeball" className={`object-contain select-none w-4 h-4 ${className}`} />
        </div>
    )
}