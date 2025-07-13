from typing import List, Dict

def match_skills(resume_skills: List[str], jd_skills: List[str]) -> Dict:
    resume_normalized = set(skill.lower().strip() for skill in resume_skills)
    jd_normalized = set(skill.lower().strip() for skill in jd_skills)

    matched = []
    missing = []

    for jd_skill in jd_normalized:
        found = any(jd_skill in rskill or rskill in jd_skill for rskill in resume_normalized)
        if found:
            matched.append(jd_skill)
        else:
            missing.append(jd_skill)

    match_percent = round((len(matched) / len(jd_normalized)) * 100, 2) if jd_normalized else 0.0

    return {
        "matched_skills": matched,
        "missing_skills": missing,
        "match_percentage": match_percent,
    }
