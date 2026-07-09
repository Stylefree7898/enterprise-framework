# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\create-task.spec.ts >> Step 2: Create Professional Role Play Task
- Location: tests\tests\create-task.spec.ts:10:5

# Error details

```
TypeError: this.clickCreateTask is not a function
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e7]:
    - button "logo" [ref=e10] [cursor=pointer]:
      - img "logo" [ref=e11]
    - button "Collapse sidebar" [ref=e12] [cursor=pointer]:
      - img
    - list [ref=e15]:
      - listitem [ref=e16]:
        - link "Home" [ref=e17] [cursor=pointer]:
          - /url: /
          - img [ref=e19]
          - generic [ref=e24]: Home
      - listitem [ref=e25]:
        - link "Clients" [ref=e26] [cursor=pointer]:
          - /url: /organizations
          - img [ref=e28]
          - generic [ref=e31]: Clients
      - listitem [ref=e33]:
        - button "Simulations" [expanded] [ref=e34] [cursor=pointer]:
          - img [ref=e36]
          - generic [ref=e38]: Simulations
          - img [ref=e39]
        - list [ref=e42]:
          - listitem [ref=e43]:
            - link "Personas" [ref=e44] [cursor=pointer]:
              - /url: /simulations/personas
              - img [ref=e46]
              - generic [ref=e50]: Personas
          - listitem [ref=e51]:
            - link "Tasks" [ref=e52] [cursor=pointer]:
              - /url: /simulations/task
              - img [ref=e54]
              - generic [ref=e58]: Tasks
      - listitem [ref=e59]:
        - link "Guardrails" [ref=e60] [cursor=pointer]:
          - /url: /guardrails
          - img [ref=e62]
          - generic [ref=e65]: Guardrails
    - list [ref=e67]:
      - listitem [ref=e68]:
        - button "SA Super Admin" [ref=e69] [cursor=pointer]:
          - generic [ref=e70]: SA
          - generic [ref=e72]: Super Admin
          - img [ref=e73]
  - main [ref=e76]:
    - main [ref=e77]:
      - generic [ref=e78]:
        - heading "Tasks" [level=1] [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e82]:
            - img [ref=e83]
            - searchbox "Search tasks" [ref=e86]
          - button "Create Task" [ref=e87] [cursor=pointer]:
            - img
            - generic [ref=e88]: Create Task
      - generic [ref=e89]:
        - tablist [ref=e90]:
          - tab "All" [selected] [ref=e91] [cursor=pointer]:
            - img [ref=e92]
            - text: All
          - tab "Welcome" [ref=e94] [cursor=pointer]:
            - img [ref=e95]
            - text: Welcome
          - tab "Role Play" [ref=e98] [cursor=pointer]:
            - img [ref=e99]
            - text: Role Play
          - tab "Interview" [ref=e104] [cursor=pointer]:
            - img [ref=e105]
            - text: Interview
          - tab "Situation" [ref=e109] [cursor=pointer]:
            - img [ref=e110]
            - text: Situation
          - tab "Board Meeting" [ref=e112] [cursor=pointer]:
            - img [ref=e113]
            - text: Board Meeting
          - tab "Case Exercise" [ref=e116] [cursor=pointer]:
            - img [ref=e117]
            - text: Case Exercise
        - tabpanel "All" [ref=e120]:
          - generic [ref=e122]:
            - table [ref=e125]:
              - rowgroup [ref=e126]:
                - row "Title Type Persona Assigned to Clients Created At Actions" [ref=e127]:
                  - columnheader "Title" [ref=e128]:
                    - button "Title" [ref=e129] [cursor=pointer]:
                      - generic [ref=e130]: Title
                      - img [ref=e131]
                  - columnheader "Type" [ref=e134]:
                    - generic [ref=e135]: Type
                  - columnheader "Persona" [ref=e136]:
                    - generic [ref=e137]: Persona
                  - columnheader "Assigned to Clients" [ref=e138]:
                    - generic [ref=e139]: Assigned to Clients
                  - columnheader "Created At" [ref=e140]:
                    - button "Created At" [ref=e141] [cursor=pointer]:
                      - generic [ref=e142]: Created At
                      - img [ref=e143]
                  - columnheader "Actions" [ref=e146]:
                    - generic [ref=e147]: Actions
              - rowgroup [ref=e148]:
                - row "Leadership Conflict Resolution 1783071238546 Role Play Adams Adams 0 03 Jul 2026" [ref=e149]:
                  - cell "Leadership Conflict Resolution 1783071238546" [ref=e150]:
                    - paragraph [ref=e151]: Leadership Conflict Resolution 1783071238546
                  - cell "Role Play" [ref=e152]:
                    - generic [ref=e153]: Role Play
                  - cell "Adams Adams" [ref=e154]:
                    - generic [ref=e156]:
                      - img "Adams" [ref=e158]
                      - paragraph [ref=e159]: Adams
                  - cell "0" [ref=e160]:
                    - generic [ref=e162]: "0"
                  - cell "03 Jul 2026" [ref=e163]:
                    - generic [ref=e164]: 03 Jul 2026
                  - cell [ref=e165]:
                    - generic [ref=e166]:
                      - button [ref=e167] [cursor=pointer]:
                        - img
                      - button [ref=e169] [cursor=pointer]:
                        - img
                      - button [ref=e170] [cursor=pointer]:
                        - img
                - row "Leadership Conflict Resolution 1783071192217 Role Play Adams Adams 0 03 Jul 2026" [ref=e171]:
                  - cell "Leadership Conflict Resolution 1783071192217" [ref=e172]:
                    - paragraph [ref=e173]: Leadership Conflict Resolution 1783071192217
                  - cell "Role Play" [ref=e174]:
                    - generic [ref=e175]: Role Play
                  - cell "Adams Adams" [ref=e176]:
                    - generic [ref=e178]:
                      - img "Adams" [ref=e180]
                      - paragraph [ref=e181]: Adams
                  - cell "0" [ref=e182]:
                    - generic [ref=e184]: "0"
                  - cell "03 Jul 2026" [ref=e185]:
                    - generic [ref=e186]: 03 Jul 2026
                  - cell [ref=e187]:
                    - generic [ref=e188]:
                      - button [ref=e189] [cursor=pointer]:
                        - img
                      - button [ref=e191] [cursor=pointer]:
                        - img
                      - button [ref=e192] [cursor=pointer]:
                        - img
                - row "dcscdsc Interview Gabriel Gabriel 0 03 Jul 2026" [ref=e193]:
                  - cell "dcscdsc" [ref=e194]:
                    - paragraph [ref=e195]: dcscdsc
                  - cell "Interview" [ref=e196]:
                    - generic [ref=e197]: Interview
                  - cell "Gabriel Gabriel" [ref=e198]:
                    - generic [ref=e200]:
                      - img "Gabriel" [ref=e202]
                      - paragraph [ref=e203]: Gabriel
                  - cell "0" [ref=e204]:
                    - generic [ref=e206]: "0"
                  - cell "03 Jul 2026" [ref=e207]:
                    - generic [ref=e208]: 03 Jul 2026
                  - cell [ref=e209]:
                    - generic [ref=e210]:
                      - button [ref=e211] [cursor=pointer]:
                        - img
                      - button [ref=e213] [cursor=pointer]:
                        - img
                      - button [ref=e214] [cursor=pointer]:
                        - img
                - row "Leadership Conflict Resolution 1783063617547 Role Play - 0 03 Jul 2026" [ref=e215]:
                  - cell "Leadership Conflict Resolution 1783063617547" [ref=e216]:
                    - paragraph [ref=e217]: Leadership Conflict Resolution 1783063617547
                  - cell "Role Play" [ref=e218]:
                    - generic [ref=e219]: Role Play
                  - cell "-" [ref=e220]:
                    - generic [ref=e221]: "-"
                  - cell "0" [ref=e222]:
                    - generic [ref=e224]: "0"
                  - cell "03 Jul 2026" [ref=e225]:
                    - generic [ref=e226]: 03 Jul 2026
                  - cell [ref=e227]:
                    - generic [ref=e228]:
                      - button [ref=e229] [cursor=pointer]:
                        - img
                      - button [ref=e231] [cursor=pointer]:
                        - img
                      - button [ref=e232] [cursor=pointer]:
                        - img
                - row "vfdv Board Meeting Adams Gabriel 0 03 Jul 2026" [ref=e233]:
                  - cell "vfdv" [ref=e234]:
                    - paragraph [ref=e235]: vfdv
                  - cell "Board Meeting" [ref=e236]:
                    - generic [ref=e237]: Board Meeting
                  - cell "Adams Gabriel" [ref=e238]:
                    - generic [ref=e240]:
                      - img "Adams" [ref=e242]
                      - img "Gabriel" [ref=e244]
                  - cell "0" [ref=e245]:
                    - generic [ref=e247]: "0"
                  - cell "03 Jul 2026" [ref=e248]:
                    - generic [ref=e249]: 03 Jul 2026
                  - cell [ref=e250]:
                    - generic [ref=e251]:
                      - button [ref=e252] [cursor=pointer]:
                        - img
                      - button [ref=e254] [cursor=pointer]:
                        - img
                      - button [ref=e255] [cursor=pointer]:
                        - img
                - row "vdfvd Welcome Gabriel Gabriel 0 03 Jul 2026" [ref=e256]:
                  - cell "vdfvd" [ref=e257]:
                    - paragraph [ref=e258]: vdfvd
                  - cell "Welcome" [ref=e259]:
                    - generic [ref=e260]: Welcome
                  - cell "Gabriel Gabriel" [ref=e261]:
                    - generic [ref=e263]:
                      - img "Gabriel" [ref=e265]
                      - paragraph [ref=e266]: Gabriel
                  - cell "0" [ref=e267]:
                    - generic [ref=e269]: "0"
                  - cell "03 Jul 2026" [ref=e270]:
                    - generic [ref=e271]: 03 Jul 2026
                  - cell [ref=e272]:
                    - generic [ref=e273]:
                      - button [ref=e274] [cursor=pointer]:
                        - img
                      - button [ref=e276] [cursor=pointer]:
                        - img
                      - button [ref=e277] [cursor=pointer]:
                        - img
                - row "vfdvfdvdfvfdvfdv Case Adams Sophie Adams 0 03 Jul 2026" [ref=e278]:
                  - cell "vfdvfdvdfvfdvfdv" [ref=e279]:
                    - paragraph [ref=e280]: vfdvfdvdfvfdvfdv
                  - cell "Case" [ref=e281]:
                    - generic [ref=e282]: Case
                  - cell "Adams Sophie Adams" [ref=e283]:
                    - generic [ref=e285]:
                      - img "Adams" [ref=e287]
                      - img "Sophie Adams" [ref=e289]
                  - cell "0" [ref=e290]:
                    - generic [ref=e292]: "0"
                  - cell "03 Jul 2026" [ref=e293]:
                    - generic [ref=e294]: 03 Jul 2026
                  - cell [ref=e295]:
                    - generic [ref=e296]:
                      - button [ref=e297] [cursor=pointer]:
                        - img
                      - button [ref=e299] [cursor=pointer]:
                        - img
                      - button [ref=e300] [cursor=pointer]:
                        - img
                - row "dcsc Situations - 0 03 Jul 2026" [ref=e301]:
                  - cell "dcsc" [ref=e302]:
                    - paragraph [ref=e303]: dcsc
                  - cell "Situations" [ref=e304]:
                    - generic [ref=e305]: Situations
                  - cell "-" [ref=e306]:
                    - generic [ref=e307]: "-"
                  - cell "0" [ref=e308]:
                    - generic [ref=e310]: "0"
                  - cell "03 Jul 2026" [ref=e311]:
                    - generic [ref=e312]: 03 Jul 2026
                  - cell [ref=e313]:
                    - generic [ref=e314]:
                      - button [ref=e315] [cursor=pointer]:
                        - img
                      - button [ref=e317] [cursor=pointer]:
                        - img
                      - button [ref=e318] [cursor=pointer]:
                        - img
                - row "Tester mamd Interview Gabriel Gabriel 0 03 Jul 2026" [ref=e319]:
                  - cell "Tester mamd" [ref=e320]:
                    - paragraph [ref=e321]: Tester mamd
                  - cell "Interview" [ref=e322]:
                    - generic [ref=e323]: Interview
                  - cell "Gabriel Gabriel" [ref=e324]:
                    - generic [ref=e326]:
                      - img "Gabriel" [ref=e328]
                      - paragraph [ref=e329]: Gabriel
                  - cell "0" [ref=e330]:
                    - generic [ref=e332]: "0"
                  - cell "03 Jul 2026" [ref=e333]:
                    - generic [ref=e334]: 03 Jul 2026
                  - cell [ref=e335]:
                    - generic [ref=e336]:
                      - button [ref=e337] [cursor=pointer]:
                        - img
                      - button [ref=e339] [cursor=pointer]:
                        - img
                      - button [ref=e340] [cursor=pointer]:
                        - img
                - row "Test Automated 001 Role Play Adams Adams 0 03 Jul 2026" [ref=e341]:
                  - cell "Test Automated 001" [ref=e342]:
                    - paragraph [ref=e343]: Test Automated 001
                  - cell "Role Play" [ref=e344]:
                    - generic [ref=e345]: Role Play
                  - cell "Adams Adams" [ref=e346]:
                    - generic [ref=e348]:
                      - img "Adams" [ref=e350]
                      - paragraph [ref=e351]: Adams
                  - cell "0" [ref=e352]:
                    - generic [ref=e354]: "0"
                  - cell "03 Jul 2026" [ref=e355]:
                    - generic [ref=e356]: 03 Jul 2026
                  - cell [ref=e357]:
                    - generic [ref=e358]:
                      - button [ref=e359] [cursor=pointer]:
                        - img
                      - button [ref=e361] [cursor=pointer]:
                        - img
                      - button [ref=e362] [cursor=pointer]:
                        - img
            - navigation "pagination" [ref=e363]:
              - list [ref=e364]:
                - listitem [ref=e365]:
                  - generic "Go to previous page":
                    - img
                    - generic: Previous
                - listitem [ref=e366]:
                  - link "1" [ref=e367] [cursor=pointer]:
                    - /url: "#"
                - listitem [ref=e368]:
                  - link "2" [ref=e369] [cursor=pointer]:
                    - /url: "#"
                - listitem [ref=e370]:
                  - link "3" [ref=e371] [cursor=pointer]:
                    - /url: "#"
                - listitem [ref=e372]:
                  - link "4" [ref=e373] [cursor=pointer]:
                    - /url: "#"
                - listitem [ref=e374]:
                  - link "5" [ref=e375] [cursor=pointer]:
                    - /url: "#"
                - img [ref=e377]
                - listitem [ref=e381]:
                  - link "40" [ref=e382] [cursor=pointer]:
                    - /url: "#"
                - listitem [ref=e383]:
                  - generic "Go to next page" [ref=e384] [cursor=pointer]:
                    - generic [ref=e385]: Next
                    - img
```

# Test source

```ts
  1  | import { expect, Page } from '@playwright/test';
  2  | import { TaskPage } from './TaskPage';
  3  | import { Task } from 'src/models';
  4  | 
  5  | export class RolePlayTask extends TaskPage {
  6  | 
  7  |   constructor(page: Page) {
  8  |     super(page);
  9  |   }
  10 | 
  11 |   async create(task: Task): Promise<void> {
  12 | 
  13 |     // =========================
  14 |     // STEP 1
  15 |     // =========================
  16 | 
> 17 |     await this.clickCreateTask();
     |                ^ TypeError: this.clickCreateTask is not a function
  18 | 
  19 |     await this.uploadThumbnail(task.thumbnail);
  20 | 
  21 |     await this.selectTaskType('Role Play');
  22 | 
  23 |     await this.fillTaskName(task.taskName);
  24 | 
  25 |     await this.selectPermissionLevel(task.permissionLevel);
  26 | 
  27 |     await this.fillScenario(task.description);
  28 | 
  29 |     // Skills - sirf click/select (search nahi)
  30 |     await this.selectSkill(task.skill);
  31 | 
  32 |     await this.clickNext();
  33 | 
  34 |     // =========================
  35 |     // STEP 2 - PERSONA
  36 |     // =========================
  37 | 
  38 |     await this.selectPersona(task.persona);
  39 | 
  40 |     await this.clickNext();
  41 | 
  42 |     // =========================
  43 |     // STEP 3 - CONTACT
  44 |     // =========================
  45 | 
  46 |     await this.configureContact(task.contactTitle);
  47 | 
  48 |     await this.save();
  49 |   }
  50 | 
  51 |   private async selectPersona(persona: string): Promise<void> {
  52 | 
  53 |     await this.page
  54 |       .getByRole('button', {
  55 |         name: persona,
  56 |         exact: true
  57 |       })
  58 |       .first()
  59 |       .click();
  60 |   }
  61 | 
  62 |   private async configureContact(title: string): Promise<void> {
  63 | 
  64 |     const titleTextbox = this.page.getByRole('textbox', {
  65 |       name: /Title/i
  66 |     });
  67 | 
  68 |     await expect(titleTextbox).toBeVisible();
  69 | 
  70 |     await titleTextbox.fill(title);
  71 |   }
  72 | 
  73 |   private async save(): Promise<void> {
  74 | 
  75 |     await this.page.getByRole('button', {
  76 |       name: 'Save & Finish'
  77 |     }).click();
  78 | 
  79 |     await this.verifyCreated();
  80 |   }
  81 | 
  82 |   private async verifyCreated(): Promise<void> {
  83 | 
  84 |     // Wait until save request completes
  85 |     await this.page.waitForLoadState('networkidle');
  86 | 
  87 |     // Wait until Create Task button appears again
  88 |     await expect(
  89 |       this.page.getByRole('button', {
  90 |         name: 'Create Task'
  91 |       })
  92 |     ).toBeVisible({
  93 |       timeout: 30000
  94 |     });
  95 | 
  96 |   }
  97 | 
  98 | }
```