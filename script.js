// دالة التنقل بين الصفحات
function navigateTo(pageId) {
    // 1. إخفاء جميع الصفحات
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 2. إظهار الصفحة المطلوبة
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // 3. التمرير إلى أعلى الصفحة بسلاسة
    window.scrollTo({ top: 0, behavior: 'smooth' });
}