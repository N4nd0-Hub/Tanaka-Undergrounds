-- ============================================================
-- TANAKA UNDERGROUND — trocar a senha do GM direto no banco
-- Use no Supabase: painel do projeto > SQL Editor > New query.
-- ============================================================

-- 1) Veja quais contas são GM (e com qual e-mail entram):
select u.email, u.id, u.last_sign_in_at
from auth.users u
join public.tanaka_admins a on a.user_id = u.id;

-- 2) Troque a senha. Substitua o e-mail e a NOVA SENHA abaixo
--    (escolha uma só sua; não precisa me contar) e rode só este bloco.
update auth.users
set encrypted_password = crypt('COLOQUE_A_NOVA_SENHA_AQUI', gen_salt('bf')),
    updated_at = now()
where email = 'COLOQUE_O_EMAIL_DO_GM_AQUI';

-- 3) (Opcional) Se a tabela de GMs estiver vazia, transforme uma conta em GM:
-- insert into public.tanaka_admins (user_id)
-- select id from auth.users where email = 'COLOQUE_O_EMAIL_DO_GM_AQUI'
-- on conflict do nothing;
