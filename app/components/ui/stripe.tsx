export const Stripe = () => {
  return (
    <section className="bg-foreground/10 border-y-foreground/40 text-foreground/40 border-y py-1 text-xs font-light md:text-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-4">
        <p className="flex w-max flex-wrap gap-x-1 min-[450px]:w-1/2">
          <span>
            SISTEMA DE ARQUIVO KONOHA{" "}
            <span className="hidden min-[450px]:inline-block">-</span>
          </span>
          <span>ACESSO AUTORIZADO</span>
        </p>
        <p className="flex w-max flex-wrap justify-end gap-x-1 min-[450px]:w-1/2">
          <span>NÍVEL DE SIGILO:</span> <span>B REG.0042</span>
        </p>
      </div>
    </section>
  );
};
