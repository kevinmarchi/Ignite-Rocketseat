import { getUser } from "@/lib/auth";
import Image from "next/image";

export function Profile() {

    const {name, avatarUrl} = getUser()

    return (
        <div className="flex items-center gap-3 text-left">
            <Image src={avatarUrl} alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>

            <p className="text-sm leading-snug max-w-[140px]">
                {name}
                <a href="/api/auth/logout" className="block text-red-400 hover:text-red-300 transition-colors">Quero sair</a>
            </p>
        </div>
    )
}