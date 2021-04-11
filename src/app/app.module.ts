import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OAuthModule } from 'angular-oauth2-oidc';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { RelatorioGeralComponent } from './relatorio/relatorio-geral/relatorio-geral.component';
import { RelatorioGerarDialogComponent } from './relatorio/relatorio-gerar-dialog/relatorio-gerar-dialog.component';
import { RelatorioCockpitComponent } from './relatorio/relatorio-cockpit/relatorio-cockpit.component';
import { RelatorioTemplatesComponent } from './relatorio/relatorio-templates/relatorio-templates.component';
import { RelatorioVersoesComponent } from './relatorio/relatorio-versoes/relatorio-versoes.component';
import { RelatorioHistoricoComponent } from './relatorio/relatorio-historico/relatorio-historico.component';
import { RelatorioConfiguracaoComponent } from './relatorio/relatorio-configuracao/relatorio-configuracao.component';
import { RelatorioPermissoesComponent } from './relatorio/relatorio-permissoes/relatorio-permissoes.component';
import { AdministracaoPeriodosComponent } from './administracao/administracao-periodos/administracao-periodos.component';
import { AdministracaoRelatoriosComponent } from './administracao/administracao-relatorios/administracao-relatorios.component';
import { AdministracaoLixeiraComponent } from './administracao/administracao-lixeira/administracao-lixeira.component';
import { CapituloUploadDialogComponent } from './relatorio/capitulo-upload-dialog/capitulo-upload-dialog.component';
import { AdministracaoPeriodosNovoDialogComponent } from './administracao/administracao-periodos-novo-dialog/administracao-periodos-novo-dialog.component';
import { AdministracaoRelatoriosNovoDialogComponent } from './administracao/administracao-relatorios-novo-dialog/administracao-relatorios-novo-dialog.component';
import { CapituloGeralComponent } from './relatorio/capitulo-geral/capitulo-geral.component';
import { CapituloVersoesComponent } from './relatorio/capitulo-versoes/capitulo-versoes.component';
import { AdministracaoTemplatesComponent } from './administracao/administracao-templates/administracao-templates.component';
import { AdministracaoTemplatesNovoDialogComponent } from './administracao/administracao-templates-novo-dialog/administracao-templates-novo-dialog.component';
import { CapituloNovoDialogComponent } from './relatorio/capitulo-novo-dialog/capitulo-novo-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent,
    RelatorioComponent,
    AdministracaoComponent,
    RelatorioGeralComponent,
    RelatorioGerarDialogComponent,
    RelatorioCockpitComponent,
    RelatorioTemplatesComponent,
    RelatorioVersoesComponent,
    RelatorioHistoricoComponent,
    RelatorioConfiguracaoComponent,
    RelatorioPermissoesComponent,
    AdministracaoPeriodosComponent,
    AdministracaoRelatoriosComponent,
    AdministracaoLixeiraComponent,
    CapituloUploadDialogComponent,
    AdministracaoPeriodosNovoDialogComponent,
    AdministracaoRelatoriosNovoDialogComponent,
    CapituloGeralComponent,
    CapituloVersoesComponent,
    AdministracaoTemplatesComponent,
    AdministracaoTemplatesNovoDialogComponent,
    CapituloNovoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    OAuthModule.forRoot(),
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTreeModule,
    MatDividerModule,
    MatSortModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  entryComponents: [
    CapituloUploadDialogComponent,
    AdministracaoPeriodosNovoDialogComponent,
    AdministracaoRelatoriosNovoDialogComponent,
    AdministracaoTemplatesNovoDialogComponent,
    RelatorioGerarDialogComponent,
    CapituloNovoDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
