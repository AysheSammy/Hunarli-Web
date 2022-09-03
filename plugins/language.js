export default (context, inject) => {
    inject('tt', (tm, ru) => {
        if(context.app.i18n.locale === 'tm') return tm
        return ru
    })
}