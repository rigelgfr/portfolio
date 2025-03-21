import pokeball_animated from "@/assets/icon/pokeball_animated.png";

export function Pokeball() {
    return (
        <div className="flex w-full justify-center">
            <img src={pokeball_animated} alt="Pokeball" className="object-contain select-none" />
        </div>
    )
}