import React from "react";
import SectionHeader from "../shared/section-header";
import { teamsData } from "@/data";
import TeamCard from "../shared/team-card";

const Team = () => {
  const headerData = {
    subtitle: "Team",
    title: "People Behind Zypher",
    description:
      "Sed a arcu feugiat, euismod quam vel, rhoncus nibh. Aliquam ac risus a  libero vehicula iaculis. Etiam ac tortor, malesuada quam nec",
  };

  return (
    <section className="py-20 container max-w-6xl mx-auto">
      <SectionHeader data={headerData} />

      <div className="grid grid-cols-4 gap-4 mt-10">
        {teamsData.map((team, i) => (
          <TeamCard data={team} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Team;
