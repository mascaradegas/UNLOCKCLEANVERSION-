---
name: clickup-issue
description: Cria uma nova issue/task no board do projeto UNLOCK no ClickUp. Use quando o usuário disser /clickup-issue, "criar issue", "adicionar tarefa no clickup", ou qualquer variação de registrar uma tarefa no board.
---

# ClickUp Issue

Cria uma task no board do projeto UNLOCK no ClickUp via API.

## Variáveis necessárias

Leia o arquivo `.env` na raiz do projeto para obter:
- `CLICKUP_API_TOKEN` — token de autenticação
- `CLICKUP_BASE_URL` — URL do board (o List ID é o segmento final após `/l/`)

O List ID é extraído da URL. Exemplo:
```
https://app.clickup.com/90171140803/v/l/2kz9wup3-617
                                              ^^^^^^^^^^^
                                              List ID = 2kz9wup3-617
```

---

## Passo 1 — Coletar informações

Pergunte ao usuário (em português):

1. **Título** da tarefa (obrigatório)
2. **Descrição** — contexto ou critérios de aceite (opcional)
3. **Prioridade**:
   - `1` = Urgente
   - `2` = Alta
   - `3` = Normal *(padrão)*
   - `4` = Baixa

Se o usuário já passou informações no comando (ex: `/clickup-issue Corrigir bug no WordDrop`), use o que foi passado e pergunte só o que estiver faltando.

---

## Passo 2 — Criar a task via API

Extraia o token do `.env` e execute:

```bash
set -a && source .env && set +a
LIST_ID="2kz9wup3-617"

curl -s -X POST "https://api.clickup.com/api/v2/list/${LIST_ID}/task" \
  -H "Authorization: ${CLICKUP_API_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{
    \"name\": \"<TITULO>\",
    \"description\": \"<DESCRICAO>\",
    \"priority\": <PRIORIDADE>
  }"
```

Substitua `<TITULO>`, `<DESCRICAO>` e `<PRIORIDADE>` com os valores coletados no Passo 1.

---

## Passo 3 — Confirmar criação

A resposta da API retorna um JSON com a task criada. Extraia e exiba ao usuário:

- `name` — título confirmado
- `url` — link direto para a task
- `id` — ID da task

Formato da resposta:
```
Task criada!
→ [<nome>](<url>)
  ID: <id> | Prioridade: <prioridade em texto>
```

---

## Guardrails

- Nunca exponha o `CLICKUP_API_TOKEN` na saída para o usuário.
- Se a API retornar erro, mostre o campo `err` e `ECODE` da resposta de forma amigável em português.
- Se `.env` não existir ou o token estiver vazio, avise o usuário para configurar o `.env` seguindo o `.env.example`.
- Prioridade padrão é `3` (Normal) se o usuário não especificar.
