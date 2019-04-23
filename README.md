# Frontend for KUDA

## 1. Introduktion
Indberetnings webapp til KUDA.

Applicationen er lavet i vue og vue-cli.

Yderligere dokumentation til VUE CLI findes her: https://github.com/vuejs/vue-cli/blob/dev/README.md

## 2. Kommandoer <a name="commands"></a>

I Intellij IDEA kan man bruge de indbyggede build/test/clean, etc. metoder eller gradle targets.

På kommandolinien kan man bruge følgende kommandoer:

#### Applikationen bygges med kommandoen

`yarn serve`

    Åben siden med url `http://frontend.admin.lokal:3001/` - eller den der vises som output i terminalen.

Det er også muligt at serve demobox - dvs der kan laves frontend udvikling hvor api peger mod demobox

`yarn servedemo`

#### Applikationen testes med kommandoen

`yarn jest`

#### Applikationen byg til produktion med kommandoen

`yarn build` - bygger til /dist folder

## 3. Struktur <a name="struktur"></a>

```text
root
├── src
│    ├── assets
│    ├── components
│    ├── views
│    ├─  App.vue
│    ├─  main.ts
│    ├─  routes.ts
│    ├─  shims-tsx.d.ts
│    ├─  shims-tsx.d.ts
├── tests
     ├── unit

```

#### Resurser `/src/assets`

Indeholder statiske resurser (ikoner, billeder, etc.) brugt i applikationen


#### Komponenter `/src/components`

Indholder fælles komponenter der kan genbruges


#### Modeller `/src/models`

Modeller (klasse objekter) der bliver brugt på tværs af applikationen. 


#### Sider `/src/views`

Indeholder "siderne" eller sider der ikke kan genbruges (og derfor ikke er i components)


#### Forside

Indgang til Admin


#### Stier/Rutning

Filen indeholder ruteopsætningen af appens sider


#### Test `/test/unit`

Indeholder alle unittest


## 4. Navngivning <a name="navngivning"></a>

### Filer

Som udgangspunkt navngives filer som følgende

```text
navn-beskrivelse.type.ext
```

#### Model:

`aarshjul-periode.model.ts`

#### Component:

`dato-sektion.vue`

#### Klasser

##### Model

`class Aarshjul`

##### Component

`class DatoSektionComponent`

## 5. Dokumentation og hjælp <a name="doc"></a>

Generel vuejs dokumentation kan findes her:

https://vuejs.org/v2/guide/

https://vuejs.org/v2/api/

#### Typescript

Vi benytter typescript vuejs og i den forbindelse er der lidt forskelligheder.

se evt: https://vuejs.org/v2/guide/typescript.html

#### Hooks

Alle vuejs hooks kan kaldes direkte som metode i din `class`

```javascript
export default class MitComponent extends Vue {
    ...
    created(){
        // do stuff
    }

    mounted(){
        // do stuff
    }

    @Watch('myProp') onPropUpdate() {
        // do stuff
    }

    @Watch('$route') onRouteUpdate() {
        // do stuff
    }
}
```

Læs mere her: https://vuejs.org/v2/api/#Options-Lifecycle-Hooks

#### Components

Når man laver et vue component vil klassenavnet default være 'tag' navnet.
Da vi kører med en hvis form for navnekonvention, kan man registrere sit component til valgfrit navn ved at bruge `Vue.component()`

```javascript
export default class DatoSektionComponent extends Vue {
    ...
}
Vue.component('DatoSektion', DatoSektionComponent); // <DatoSektion /> istedet for <DatoSektionComponent />
```


## 6. Test <a name="test"></a>

Vi benytter Vue test utils og jest til at teste med - hvilket mellem linjerne også er det Vue anbefaler.
Jest giver en let tilgang til at teste og mocke bla. async kald. Jest mocker også i udgangspunktet alle services
med en default implementering, medmindre man specifikt konfigurerer eller disabler mocken.

Det er muligt at mocke services/metoder, via jest, ved bl.a. at lave en folder `__mocks__` på samme niveau som den fil du vil mocke og lave indsætte en kopi af den fil.
eksempelvis er aarshjul.service mocket:

```
├── services
│    ├── __mocks__ 
│    │          ├── aarshjul.service.ts
│    │
│    ├── aarshjul.service.ts 
│    ├── ...

```

`__mocks__/aarshjul.service` returnere mocket data for hhv. dets get/save/list metoder.

Hvis man vil mocke noget fra node_modules så skal `__mocks__` ligge på samme niveau som node_modules, læs mere her: https://facebook.github.io/jest/docs/en/manual-mocks.html

Læs evt. mere her:

- https://vue-test-utils.vuejs.org/en/guides/testing-SFCs-with-jest.html
- https://vue-test-utils.vuejs.org/en/guides/getting-started.html


## 7. Referencer <a name="ref"></a>

- https://github.com/johnpapa/vue-heroes/tree/typescript
- https://itnext.io/vuejs-and-webpack-4-from-scratch-part-1-94c9c28a534a
- https://vuejsdevelopers.com/2018/03/26/vue-cli-3/
- https://stackoverflow.com/questions/49176735/why-are-vue-single-file-components-preferred-to-separate-files-in-typescript
- https://webdevelop.pro/vuejs-with-typescript.html