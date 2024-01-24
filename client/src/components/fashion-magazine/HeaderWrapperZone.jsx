export default function HeaderWrapperZone(){
    return(
        <div class="header-wrapper header-wrapper-zone">
            <button class="circle-btn circle-btn-m btn-white event-header-back-to-map   "><svg class="arrow icon"><use href="#icon-arrow-stroke"></use></svg></button>
            <div class="header-container">
                <div class="header-left-section"><h3 class="header-title">Movie star</h3></div>
                <div class="thumbnail-wrapper"><div class="currency-container"><div class="currency-tries"><span class="currency-circle currency-circle-full"></span><span class="currency-circle currency-circle-full"></span><span class="currency-circle currency-circle-full"></span><span class="currency-circle currency-circle-full"></span><span class="currency-circle currency-circle-full"></span></div></div></div>
                <span class="header-separator"></span>
                <button class="header-how-to-button">
                    <svg class="icon"><use href="#icon-question-mark"></use></svg>
                    <span class="how-to-button-label">HOW TO</span>
                </button>
                <button class="header-all-rewards-button ">
                    <span class="all-rewards-button-icon"></span>
                    <span class="all-rewards-button-label">0/31</span>
                </button>
            </div>
        </div>
    );
}