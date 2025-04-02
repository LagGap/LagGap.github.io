export abstract class ITranslationStrategy{
    abstract translateComponent(arrayToUse: string[], textElements : NodeListOf<Element>): void;
}