interface HeaderProps {
    title: string;
    count?: number;
}

export function Header( { title, count }: HeaderProps) {
    return (
        <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/90 px-4 py-3 backdrop-blur">
            <h1 className="text-lg font-bold text-gray-900">
                {title}
                {typeof count === 'number' && (
                    <span className="ml-1 font-normal text-gray-900">({count})</span>
                )}
            </h1>
        </header>
    );
}