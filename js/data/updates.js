/* ============================================================
   USAPALMHN — Updates data
   ------------------------------------------------------------
   This is the ONLY file you edit to publish a monthly update.
   Add a new object to the top of UPDATES and save — updates.html
   sorts, groups and filters everything automatically.

   Fields
     date       'YYYY-MM-DD'  (required — the day it happens)
     dateEnd    'YYYY-MM-DD'  optional, for a range or a series
     title      required
     category   'event' | 'campaign' | 'program' | 'network'
     host       who is running it
     when       time as you want it shown, e.g. '11:00am ET'
     where      venue, city, or 'Online'
     body       a sentence or two
     link       full https:// URL — leave '' and no button appears
     linkLabel  button text, defaults to 'Learn more'
     ongoing    true for campaigns with no end date
   ============================================================ */

window.UPDATES = [

  /* ---------- Autumn 2026 ---------- */
  {
    date: '2026-10-26',
    dateEnd: '2026-11-04',
    title: 'UK-PalMHN Mental Health Study Tour',
    category: 'network',
    host: 'UK-Palestine Mental Health Network',
    where: 'Palestine',
    body: 'Rescheduled from the spring. Contact ukpalmhn@gmail.com for an application form, to be completed ahead of an online meeting.',
    link: 'mailto:ukpalmhn@gmail.com',
    linkLabel: 'Request an application'
  },

  /* ---------- May 2026 ---------- */
  {
    date: '2026-05-17',
    title: 'Eyewitness Palestine 25th Anniversary Benefit',
    category: 'event',
    host: 'Eyewitness Palestine',
    when: '3:00–7:00pm CST',
    where: 'Alhambra Palace, Chicago',
    body: '“25 Years Rooted and Strong.” The benefit helps fund future delegations, including the USAPALMHN delegation planned for 2027. Outreach Representatives from across the network attended.',
    link: '',
    linkLabel: 'Register'
  },
  {
    date: '2026-05-10',
    title: 'The Right to Health: A Mother’s Day Webinar Honoring the Balata Health Center',
    category: 'event',
    host: 'USA-Palestine Mental Health Network',
    when: '11:00am ET',
    where: 'Online',
    body: 'Held on Mother’s Day in the US as an act of solidarity with the many female-headed families in Balata, Nablus, who struggle daily to survive. A live-streamed webinar supporting those families and the continuation of essential health and mental health services.',
    link: ''
  },
  {
    date: '2026-05-02',
    title: 'Storytelling as Resistance',
    category: 'event',
    host: 'Australia-Palestine Mental Health Network',
    when: '4:00pm Palestine · 9:00am EST',
    where: 'Online',
    body: 'A panel and conversation to strengthen resistance actions while honoring the cultural knowledge of story keeping and storytelling.',
    link: ''
  },

  /* ---------- April 2026 ---------- */
  {
    date: '2026-04-28',
    dateEnd: '2026-05-07',
    title: 'UK-PalMHN Study Delegation to Palestine',
    category: 'network',
    host: 'UK-Palestine Mental Health Network',
    where: 'Palestine',
    body: 'Postponed to 26 October – 4 November 2026 because of the ongoing military attack on Iran.',
    link: ''
  },
  {
    date: '2026-04-23',
    title: 'Why Wars? Voices of Women',
    category: 'event',
    host: 'Ireland-Palestine Mental Health Network',
    when: '12:00–1:30pm Ireland · 7:00–8:30pm ET',
    where: 'Online',
    body: 'Part of the Ecumenical Conversation Series with the Irish School of Ecumenics, featuring Nadera Shalhoub-Kevorkian, Elizabeth W. Corrie, Khaldah Salih, Necta Montes Rocas and Denise Bradley, chaired by Jude Lal Fernando. Participants are invited into self-reflection from women’s perspectives, articulating an explicitly ethical political position.',
    link: '',
    linkLabel: 'Register'
  },
  {
    date: '2026-04-19',
    title: 'Besiege Your Siege with Madness: Collective Liberation and the Psychoanalysis of World-Making',
    category: 'event',
    host: 'USA-Palestine Mental Health Network',
    where: 'Online',
    body: 'A webinar with Dr. Reem Abu Hweij, Palestinian psychologist and academic. Rescheduled from two earlier dates because of the unrest caused by the US-Israeli war against Iran. The event raised funds for the Balata Health Center, which has been unable to provide services for several months for lack of funding.',
    link: ''
  },
  {
    date: '2026-04-18',
    title: 'Café Palestine 39: A Music Therapy-Informed Programme for Music Teachers in Gaza',
    category: 'event',
    host: 'UK-Palestine Mental Health Network',
    when: '4:00–6:00pm UK · 11:00am–1:00pm ET',
    where: 'Online',
    body: 'An introduction to a new online support programme for music teachers in Gaza, developed in response to the urgent need for practical ways to support children experiencing severe trauma. It offers a music therapy-informed framework to strengthen the work musicians are already doing with traumatized children, through accessible, ethically grounded tools. Developed by the Edward Said National Conservatory of Music with international partners.',
    link: '',
    linkLabel: 'Join the event'
  },
  {
    date: '2026-04-15',
    title: 'One Thousand White Coats on the Hill',
    category: 'event',
    host: 'Doctors Against Genocide',
    where: 'Capitol Hill, Washington DC',
    body: 'A push to bring a thousand health workers to Capitol Hill. Many USA-PalMHN Outreach Representatives attended — let us know at sc@usapalmhn.org if you plan to join a future Hill Day so we can meet up.',
    link: '',
    linkLabel: 'Register'
  },
  {
    date: '2026-04-11',
    title: 'Book Talk: Lara Sheehi, “From the Clinic to the Streets: Psychoanalysis for Revolutionary Futures”',
    category: 'network',
    host: 'UK-Palestine Mental Health Network',
    when: '4:00–5:50pm BST · 11:00am–12:30pm EST',
    where: 'Online',
    body: 'A conversation with Lara Sheehi about her new book.',
    link: ''
  },

  /* ---------- March 2026 ---------- */
  {
    date: '2026-03-22',
    title: 'Health Under Siege',
    category: 'event',
    host: 'Jewish Voice for Peace Health Advisory Council',
    where: 'Online',
    body: 'USA-PalMHN was one of several co-sponsors of this webinar.',
    link: ''
  },
  {
    date: '2026-03-15',
    title: 'Outreach Representatives Meeting',
    category: 'program',
    host: 'USA-Palestine Mental Health Network',
    when: '11:30am–1:00pm EST',
    where: 'Zoom',
    body: 'Dr. Reem Abu Hweij presented “Besiege Your Siege with Madness: Collective Liberation and the Psychoanalysis of World Making.”',
    link: 'https://us02web.zoom.us/j/85865040077?pwd=GKB76qmbgMEFnxK4Sk2TyyGEHN2kgP.1',
    linkLabel: 'Join on Zoom'
  },
  {
    date: '2026-03-07',
    title: 'Do No Harm: Demand to Cancel the Henri Parens Symposium',
    category: 'campaign',
    host: 'USA-Palestine Mental Health Network',
    body: 'The symposium framed the atrocity in Gaza as a symmetrical trauma. USAPALMHN wrote to the executive directors of APsA and PCP: “This is not only inaccurate but is an insult to the psychoanalytic community and reproduces the false notion of American immunity to the atrocities that are being carried on in our name… ‘peace’ without justice is merely a continuation of the ethnic cleansing of Palestine that Israel has pursued since 1948.” Add your voice by writing directly, and by signing the letter initiated by the Palestine Global Mental Health Network.',
    link: ''
  },
  {
    date: '2026-03-01',
    dateEnd: '2026-03-28',
    title: 'Decolonial Mental Health',
    category: 'network',
    host: 'Science and Non-Duality',
    where: 'Online',
    body: 'A four-part webinar series with Dr. Samah Jabr. Several Outreach Representatives took part. Registrants have full access to the recordings as well as the live sessions.',
    link: ''
  },
  {
    date: '2026-03-01',
    title: 'Decolonizing Minds in Relation to Israel and Palestine',
    category: 'network',
    host: 'UK-Palestine Mental Health Network',
    when: '10:00am–1:00pm EST',
    where: 'Online',
    body: 'A half-day session from the UK network.',
    link: ''
  },

  /* ---------- February 2026 ---------- */
  {
    date: '2026-02-22',
    title: 'Exiled but Not Erased: The Struggle for Palestinian Refugee Rights — Part Two',
    category: 'event',
    host: 'USAPALMHN with Badil Resource Center',
    where: 'Online · Hudson Valley, NY · Austin, TX',
    body: 'The second film and discussion with speakers from Badil, a resource center for Palestinian residency and refugee rights. A fundraiser for both organizations. Separate registration for the online screening and for each in-person location.',
    link: ''
  },
  {
    date: '2026-02-08',
    title: 'Exiled but Not Erased: The Struggle for Palestinian Refugee Rights — Part One',
    category: 'event',
    host: 'USAPALMHN with Badil Resource Center',
    where: 'Online · Hudson Valley, NY · Austin, TX',
    body: 'Groups gathered in Austin, Hudson Valley and online with the Badil Resource Center director and members of the Palestinian Youth Forum, to learn about Palestinian resistance to Zionist efforts to ethnically cleanse the West Bank. The programme opened with a film about the depopulating of a Palestinian village.',
    link: ''
  },

  /* ---------- Ongoing campaigns and programs ---------- */
  {
    ongoing: true,
    date: '2026-04-01',
    title: 'Reading Circles',
    category: 'program',
    host: 'USA-Palestine Mental Health Network',
    body: 'The early 2026 circles on Psychoanalysis Under Occupation and on Boycott, Divestment and Sanctions have concluded. A circle on Incarcerated Childhood and the Politics of Unchilding is under way. Each circle runs for six sessions. Outreach Representatives interested in facilitating a future circle can get in touch at sc@usapalmhn.org.',
    link: 'get-involved.html#reading-circles',
    linkLabel: 'About Reading Circles'
  },
  {
    ongoing: true,
    date: '2026-04-01',
    title: 'Drop NASW',
    category: 'campaign',
    host: 'Social Work for Palestine',
    body: 'Launched in response to NASW’s endorsement of the Israeli Union of Social Workers despite their denial of the ongoing genocide in Gaza. Join the upcoming PowerHour to learn more. This campaign grew out of the earlier Expel the IUSW effort, which pressed NASW to have the International Federation of Social Workers expel the Israeli Union of Social Workers for gross human rights violations.',
    link: ''
  },
  {
    ongoing: true,
    date: '2026-04-01',
    title: 'Resign from the International Psychoanalytic Association',
    category: 'campaign',
    host: 'Palestine Mental Health Networks',
    body: 'A call for members of the International Psychoanalytic Association to resign, given the organization’s ongoing refusal to acknowledge the genocide in Gaza. More information is forthcoming.',
    link: 'campaigns.html#ipa',
    linkLabel: 'See the campaign'
  },
  {
    ongoing: true,
    date: '2026-04-01',
    title: 'DAG Hill Days',
    category: 'campaign',
    host: 'Doctors Against Genocide',
    where: 'Capitol Hill, Washington DC',
    body: 'Monthly advocacy days on Capitol Hill demanding that elected representatives stop funding and supporting genocide. USA-PalMHN Outreach Representatives take part each month.',
    link: 'https://doctorsagainstgenocide.org/',
    linkLabel: 'Doctors Against Genocide'
  }

];
