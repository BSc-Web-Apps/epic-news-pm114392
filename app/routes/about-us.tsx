import { RiTwitterXFill, RiLinkedinBoxFill } from "react-icons/ri";

import headshot from '~/assets/jpg/portrait-01.jpg'
import headshot2 from '~/assets/jpg/portrait-02.jpg'
import headshot3 from '~/assets/jpg/portrait-03.jpg'

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageSrc: string;
}

export function TeamMemberCard({ name, role, imageSrc,}: TeamMemberCardProps) {
  return (
    <div className="rounded-lg bg-slate-800 p-8 w-fit">
      <img
        src={imageSrc}
        alt="An employee"
        className="w-64 h-64 rounded-full mx-auto"
      />

      <div className="pt-6">
        <h3 className="text-center font-semi-bold text-white">{name}</h3>
        <p className="text-slate-400 text-center pt-1">{role}</p>

        <div className="flex justify-center gap-4 text-slate-400 pt-6">
          <RiTwitterXFill />
          <RiLinkedinBoxFill />
        </div>
      </div>
    </div>
  );
};

export default function AboutUsRoute() {
  return (
    <main className="container py-16">
      <h1 className="text-mega">About us</h1>

      <div className="flex flex-col gap-8 pt-8 m-4 md:flex-row">
				<TeamMemberCard
					name="Leonard Krasner"
					role="Senior Designer"
					imageSrc={headshot}
				/>
				<TeamMemberCard
					name="John Doe"
					role="Marketing Manager"
					imageSrc={headshot2}
				/>
				<TeamMemberCard
					name="Jenna Corey"
					role="Finance Advisor"
					imageSrc={headshot3}
				/>
			</div>

			<p className="lg:text-x1 text-base text-gray-600 md:text-lg">
				Welcome to Epic News, where the latest developements in tech are
				found.
			</p>
			<button className="rounded-full bg-amber-200 px-4 py-2 text-white md:px-6 md:py-3 lg:px-8 lg:py-4 flex">
				Learn More?
			</button>
    </main>
  );
}