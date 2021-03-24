import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/list">
							<a>List of exericises</a>
						</Link>
					</li>
					<li>
						<Link href="/create-exercise">
							<a>Create Exercise</a>
						</Link>
					</li>
          <li>
						<Link href="/create-user">
							<a>Create User</a>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
