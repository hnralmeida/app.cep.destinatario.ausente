// Interface com dados do usuário na sessao
export default interface User {
    id: number;
    permission_group_id: number;
    name: string;
    email: string;
    want_be_seller: number;
    active: number;
    layout_cards: number;
    created_at: string;
    updated_at: string;
    user_token: string;
    profile_photo_url: string;
}