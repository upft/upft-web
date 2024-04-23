import Image from "next/image";
import teamImg1 from "@/public/imgs/company/me.jpeg";

export default function CompanyTeam() {
  const teamMembers = [
    {
      avata: teamImg1,
      name: "Thomas Chen",
      level: "Founder",
    },
  ];

  return (
    <div className="about-us-section relative py-5 lg:py-20 px-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-start lg:text-center text-bold">
          <span className="px-4 lg:px-8 custom-start-effect ">Team</span>
        </h2>
        <p className="px-4 lg:px-8 my-8 text-start lg:text-center w-full lg:w-2/3 mx-auto"></p>
        <div className="w-full hidden lg:grid grid-cols-3 gap-10">
          {teamMembers.map((teamMember, key) => (
            <div className="team-member-card text-center" key={key}>
              <Image
                className="mx-auto rounded-2xl"
                src={teamMember.avata}
                alt="teamAvata"
              />
              <div className="full py-4">
                <span className="font-bold text-[24px]">{teamMember.name}</span>
                <p>{teamMember.level}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:hidden grid grid-cols-1 gap-10">
          {teamMembers.map((teamMember, key) => (
            <div key={key}>
              <div className="team-member-card text-center">
                <Image
                  className="mx-auto rounded-2xl"
                  src={teamMember.avata}
                  alt="teamAvata"
                />
                <div className="full py-4">
                  <span className="font-bold text-[24px]">
                    {teamMember.name}
                  </span>
                  <p>{teamMember.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
