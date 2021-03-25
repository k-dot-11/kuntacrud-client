import Link from 'next/link';

export default function Layout({ children }) {
	return (
		<div className="flex flex-col items-center justify-center py-24">
			<div className="flex w-full py-4 px-9 bg-brand-normal justify-around align-middle mb-12 shadow-2xl fixed top-0 z-50">
				<h1 className="text-3xl font-light text-white">
					<Link href="/">
						<a>Vessel</a>
					</Link>
				</h1>
				<nav className="flex flex-row w-3/5 justify-items-end">
					<ul className="w-full  flex flex-row justify-end">
						
						<li className="nav-link flex flex-row align-middle">
							<Link className="flex flex-row align-middle" href="/list">
								<a>Product</a>
							</Link>
						</li>
						<li className="nav-link">
							<Link href="/create-exercise">
								<a>Enterprise</a>
							</Link>
						</li>
						<li className="nav-link">
							<Link href="/create-user">
								<a>Resources</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			{children}
		</div>
	);
}
