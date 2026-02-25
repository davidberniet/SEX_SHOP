<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260225124847 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE producto_combinacion ADD precio_especifico NUMERIC(10, 2) DEFAULT NULL');
        $this->addSql('ALTER TABLE producto_combinacion ADD activo BOOLEAN DEFAULT true');
        $this->addSql('ALTER TABLE producto_combinacion DROP precio');
        $this->addSql('ALTER TABLE producto_combinacion RENAME COLUMN stock TO cantidad');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE producto_combinacion ADD precio NUMERIC(10, 2) NOT NULL');
        $this->addSql('ALTER TABLE producto_combinacion DROP precio_especifico');
        $this->addSql('ALTER TABLE producto_combinacion DROP activo');
        $this->addSql('ALTER TABLE producto_combinacion RENAME COLUMN cantidad TO stock');
    }
}
