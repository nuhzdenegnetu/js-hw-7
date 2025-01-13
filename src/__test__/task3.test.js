import { SkillsManager } from '../main'

describe('SkillsManager', () => {
  let skillsManager

  beforeEach(() => {
    skillsManager = new SkillsManager()
  })

  test('adding a skill', () => {
    const skill = 'JavaScript'
    expect(skillsManager.addSkill(skill)).toBe(skill)
    expect(skillsManager.skills).toContain(skill)
  })

  test('adding a skill with less than two characters', () => {
    const shortSkill = 'J'
    expect(skillsManager.addSkill(shortSkill)).toBeNull()
    expect(skillsManager.skills).not.toContain(shortSkill)
  })

  test('adding a skill that is not a string', () => {
    const notStringSkill = 123
    expect(skillsManager.addSkill(notStringSkill)).toBeNull()
    expect(skillsManager.skills).not.toContain(notStringSkill)
  })

  test('getting all skills', () => {
    skillsManager.addSkill('JavaScript')
    skillsManager.addSkill('CSS')
    expect(skillsManager.getAllSkills()).toEqual(['JavaScript', 'CSS'])
  })
})
