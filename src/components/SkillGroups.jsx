import React from 'react'

export default function SkillGroups({ groups }) {
  return (
    <div className="skill-groups">
      {groups.map((group) => (
        <article className="skill-group-card" key={group.group}>
          <h3>{group.group}</h3>
          <div className="skill-rows">
            {group.skills.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <div className="skill-meta">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-desc">{skill.desc}</span>
                </div>
                <div className="skill-level">
                  <span>{skill.level}</span>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}
