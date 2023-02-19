<template>
  <div id="portfolio" class="py-28">
    <p class="text-h2 mb-4 text-center font-medium">Portfolio</p>
    <div class="grid grid-cols-1 md:grid-rows-6 md:grid-cols-2 gap-4">
      <div
        v-for="(p, i) in projects"
        :key="i"
        :class="`group mb-1 bg-no-repeat bg-cover bg-center`"
        :style="`background-image: url('${p.image}'); grid-row: span ${p.rowSpan}; grid-column: span ${p.colSpan};`"
      >
        <div
          class="flex flex-col p-10 h-full invisible group-hover:bg-black/70 group-hover:visible"
        >
          <p class="text-base text-gray mb-2">
            {{ p.type }}
          </p>
          <p class="text-subtitle-1 mb-4 font-medium">
            {{ p.name }}
          </p>
          <div class="mt-auto">
            <p class="text-caption mb-2">
              {{ p.description }}
            </p>
            <a
              v-if="p.link"
              :href="p.link"
              target="_blank"
              class="text-primary"
            >
              View details
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: 'Vibeoo - TurnUpAfrica',
    type: 'UI/UX AND WEB',
    description: 'A radio on demand platform based in Lagos, Nigeria',
    link: 'https://www.behance.net/gallery/63228697/Turn-Up-Africa-Vibeoo',
    image: '/images/Turnupafrica.jpg',
    rowSpan: '3',
    colSpan: '1',
  },
  {
    name: 'Castellum Consulting',
    type: 'UI/UX, BRAND IDENTITY & WEB',
    description:
      'Castellum Consulting is a consulting company providing services to a variety of organisations in private and public sector globally.',
    link: 'https://www.behance.net/gallery/52137977/Castellum-Consulting-Brand-Web-Design',
    image: '/images/castellumconsultingBrand.jpg',
    rowSpan: '2',
    colSpan: '1',
  },

  {
    name: 'Oscar Oyinsan',
    type: 'WEB',
    description:
      'Oscar is quite simply one of the most influential, well-regarded, and well-known names in the Nigerian Media space with over 13 years in the industry that cuts across Radio and Television',
    link: '/https://oscaroyinsan.com/',
    image: '/images/OscarWeb.jpg',
    rowSpan: '2',
    colSpan: '1',
  },
  {
    name: 'Youth Party',
    type: 'WEB',
    description:
      'The Youth Party is a new generation political association made up of individuals and groups that seek to serve and unite Nigerians. We intend to develop and improve the standard of living of all Nigerians',
    link: 'https://www.youthpartyng.com/',
    image: '/images/ypWeb.jpg',
    rowSpan: '2',
    colSpan: '1',
  },
  {
    name: 'Minimalyst Design',
    type: 'BRAND IDENTITY',
    description: 'Our brand identity',
    link: 'https://minimalyst.io',
    image: '/images/CardHolder.jpg',
    rowSpan: '2',
    colSpan: '1',
  },
  {
    name: 'Africa Innovate',
    type: 'WEB',
    description:
      'This website was built with @TimiAdesoji and @DavidMudia for The Africa Innovate Project.',
    image: '/images/afrii.jpg',
    rowSpan: '1',
    colSpan: '1',
  },

  {
    name: 'Kayode Fahm',
    type: 'WEB',
    description:
      'Kayode Fahm is a motivational speaker, Classical Guitarist and Martial Artist',
    image: '/images/KayodeFahmWeb.jpg',
    rowSpan: '2',
    colSpan: '2',
  },
]
</script>
