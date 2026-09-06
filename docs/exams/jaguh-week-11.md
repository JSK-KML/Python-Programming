---
title: Jaguh Week 11 - Marks
outline: deep
---

<script setup>
import { ref } from 'vue'

const JAGUH_WEEK_11 = {
  "MC2615112118": { name: "Asyiqah Nur Syahirah binti Asmuni", mark: 32 },
  "MC2615112200": { name: "Charlotte Ivenne Lomius", mark: 36 },
  "MC2615112170": { name: "Joyce Beauhavan Tudus", mark: 25 },
  "MC2615202759": { name: "Muhammad Iskandar Zulkarnain bin Kamarudin", mark: 31 },
  "MC2615112217": { name: "Willieam Steven", mark: 38 },
  "MC2615112183": { name: "Allissia Teo Siew Siew", mark: 41 },
  "MC2615112108": { name: "Jayren Tang Liang Cheng", mark: 49 },
  "MC2615112169": { name: "Nurul Syazwana binti Jasrin", mark: 39 }
}

const matric = ref('')
const record = ref(null)
const error = ref('')

function lookupMark() {
  const id = matric.value.trim().toUpperCase()
  record.value = null
  error.value = ''

  if (id === '') {
    error.value = 'Please enter your Matric Number.'
    return
  }

  const found = JAGUH_WEEK_11[id]
  if (found) {
    record.value = { id, name: found.name, mark: found.mark }
  } else {
    error.value = 'No record found for Matric Number: ' + id
  }
}
</script>

# Jaguh Week 11 — Check Your Mark

Enter your Matric Number to see your mark.

<div class="mark-lookup">
  <input
    v-model="matric"
    type="text"
    placeholder="MC..."
    autocomplete="off"
    @keydown.enter="lookupMark"
  />
  <button type="button" @click="lookupMark">Check Mark</button>

  <div v-if="record" class="mark-result mark-result--found">
    <div><strong>Name:</strong> {{ record.name }}</div>
    <div><strong>Matric Number:</strong> {{ record.id }}</div>
    <div><strong>Mark:</strong> {{ record.mark }}</div>
  </div>

  <div v-else-if="error" class="mark-result mark-result--error">
    {{ error }}
  </div>
</div>

<style scoped>
.mark-lookup {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}
.mark-lookup input {
  width: 100%;
  max-width: 320px;
  padding: 10px 12px;
  font-size: 15px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  margin-right: 8px;
}
.mark-lookup button {
  padding: 10px 18px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: var(--vp-c-brand-1);
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.mark-lookup button:hover {
  transform: translateY(-2px);
}
.mark-result {
  margin-top: 16px;
  padding: 14px 16px;
  border-radius: 8px;
  line-height: 1.7;
}
.mark-result--found {
  background: rgba(47, 158, 68, 0.12);
  border: 1px solid rgba(47, 158, 68, 0.4);
}
.mark-result--error {
  background: rgba(230, 73, 128, 0.12);
  border: 1px solid rgba(230, 73, 128, 0.4);
}
</style>
