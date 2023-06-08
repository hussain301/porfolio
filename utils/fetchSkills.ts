import { Skill } from "../typings";

export const fetchSkills = async()=>{
const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getSkill`)
const data = await res.json()
const skills:Skill[]= data.skills
return skills
}