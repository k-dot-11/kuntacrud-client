import Image from 'next/image';
import { FcCollaboration, FcImport, FcPhone } from 'react-icons/fc';

const Home = () => (
	<div className="container space-y-24 w-full">
		<div className="container  flex flex-row justify-between">
			<div className="w-2/4 flex flex-col space-y-10 pr-3">
				<h1 className="text-purple-500 leading-snug font-mono text-5xl">
					This is your moment.<br /> Let’s reinvent work.
				</h1>
				<p className="text-gray-500 font-mono leading-normal text-lg">
					The past year proved that we can redefine the way we work. Let’s build a more connected, inclusive
					and flexible future together.
				</p>
				<button className="hover:bg-purple-400 bg-white border-purple-500 border text-purple-400 hover:text-white font-bold py-2 px-4 rounded w-48">
					Learn More
				</button>
				<p class="text-xs font-mono">Need to create a workspace? Get started</p>
			</div>
			<div className="w-2/4 flex flex-col">
				<Image
					className="rounded-2xl"
					src="/landing_top_new.jpg"
					alt="Landing picture vessel"
					width={400}
					height={400}
				/>
			</div>
		</div>
		<div className="container  flex flex-row space-x-12 justify-around">
			<div className="w-2/4 flex flex-col">
				<Image
					className="rounded-2xl"
					src="/landing_second.jpg"
					alt="Landing picture vessel"
					width={400}
					height={400}
				/>
			</div>
			<div className="w-2/4 flex flex-col space-y-10 pl-3 self-center">
				<h1 className="text-purple-500 leading-snug font-mono text-3xl">
					Bring your team together in channels
				</h1>
				<p className="text-gray-500 font-mono leading-normal text-lg">
					A channel is the place for everything related to a project, topic or team. Everyone in a channel
					sees the same messages and stays on the same page.
				</p>
				<button className="hover:bg-purple-400 bg-white border-purple-500 border text-purple-400 hover:text-white font-bold py-2 px-4 rounded w-96">
					Learn more about channels
				</button>
			</div>
		</div>
		<div className="flex container justify-evenly">
			<div className="landing-card ">
				<FcImport size={50} />
				<h1 className="font-semibold underline leading-loose">Share files</h1>
				<p>Keep files and the messages about them together in channels.</p>
			</div>
			<div className="landing-card">
				<FcPhone size={50} />

				<h1 className="font-semibold underline  leading-loose">Connect on a call</h1>
				<p>If working face to face is easier, go from a channel to a voice or video call with one click.</p>
			</div>
			<div className="landing-card ">
				<FcCollaboration size={50} />

				<h1 className="font-semibold underline leading-loose">Collaborate with partners</h1>
				<p className="leading-normal">
					Work faster with external clients, vendors and more by working in a channel.
				</p>
			</div>
		</div>
		<div className=" flex flex-col w-full py-24 px-9 bg-yellow-100 justify-around align-middle mb-12 shadow-xl space-y-4">
			<h1 className="text-4xl font-mono font-bold self-center">Over 750,000 companies use Slack to get work done</h1>
			<div className="flex flex-row space-x-24">
				<Image
				
					className="rounded-2xl w-2/4"
					src="/customer-photo.png"
					alt="Landing picture vessel"
					width={600}
					height={400}
				/>
				<div className="flex flex-col w-2/4 self-center justify-around">
					<h1 className="font-light self-center text-2xl font-mono leading-snug mb-2">
						‘Historically what might have taken a couple of days to iron out is now generally something we
						can jump on within 30 minutes with Slack. That’s helped a lot with the openness and transparency
						around what issues are present and where people might need help.’
					</h1>
					<p className='font-semibold leaidng-12'>Damian Cronan, CTO, Nine's publishing division</p>
				</div>
			</div>
		</div>
	</div>
);

export default Home;
