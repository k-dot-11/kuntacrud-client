import Link from 'next/link';

export default function Layout({ children }) {
	return (
		<div className="flex flex-col items-center justify-center space-y-12 ">
			<div className="flex w-full py-4 px-9 bg-purple-500 justify-around align-middle">
				<h1 className="text-3xl font-light text-white">Vessel</h1>
				<nav className="flex flex-row w-3/5 justify-items-end">
					<ul className="w-full  flex flex-row justify-end">
						<li className="nav-link">
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li className="nav-link">
							<Link href="/list">
								<a>List of exericises</a>
							</Link>
						</li>
						<li className="nav-link">
							<Link href="/create-exercise">
								<a>Create Exercise</a>
							</Link>
						</li>
						<li className="nav-link">
							<Link href="/create-user">
								<a>Create User</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			{children}
		</div>
	);
}
